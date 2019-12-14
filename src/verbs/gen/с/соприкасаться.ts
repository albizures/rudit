import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соприкасаться: PerfectVerb = {
  name: Word('соприкасаться', 8),
  singular1stPerson: Word('соприкасаюсь', 8),
  singular2ndPerson: Word('соприкасаешься', 8),
  singular3rdPerson: Word('соприкасается', 8),
  plural1stPerson: Word('соприкасаемся', 8),
  plural2ndPerson: Word('соприкасаетесь', 8),
  plural3rdPerson: Word('соприкасаются', 8),
  masculinePast: Word('соприкасался', 8),
  femininePast: Word('соприкасалась', 8),
  neuterPast: Word('соприкасалось', 8),
  pluralPast: Word('соприкасались', 8),
  imperativeInformal: Word('соприкасайся', 8),
  imperativeFormal: Word('соприкасайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(соприкасаться.name.text, соприкасаться);

export { соприкасаться };