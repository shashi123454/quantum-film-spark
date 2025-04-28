
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ImageUpload = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <section id="upload" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Create Your <span className="glow-text">Video</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Upload your image and describe how you want it animated
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Area */}
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Upload Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-neon-purple transition-colors">
                <Input
                  type="file"
                  className="hidden"
                  id="image-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Upload className="h-12 w-12 text-neon-purple mb-4" />
                  <p className="text-lg font-medium mb-2">Drop your image here</p>
                  <p className="text-sm text-gray-400">or click to browse</p>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Prompt Area */}
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>Describe Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Describe how you want your image animated. For example: 'Make the clouds move slowly across the sky' or 'Create a gentle ripple effect on the water'"
                className="min-h-[200px] bg-white/5 border-white/20"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button className="futuristic-button w-full mt-4">
                Generate Video
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
