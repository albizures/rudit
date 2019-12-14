import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спасаться: PerfectVerb = {
  name: Word('спасаться', 4),
  singular1stPerson: Word('спасаюсь', 4),
  singular2ndPerson: Word('спасаешься', 4),
  singular3rdPerson: Word('спасается', 4),
  plural1stPerson: Word('спасаемся', 4),
  plural2ndPerson: Word('спасаетесь', 4),
  plural3rdPerson: Word('спасаются', 4),
  masculinePast: Word('спасался', 4),
  femininePast: Word('спасалась', 4),
  neuterPast: Word('спасалось', 4),
  pluralPast: Word('спасались', 4),
  imperativeInformal: Word('спасайся', 4),
  imperativeFormal: Word('спасайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(спасаться.name.text, спасаться);

export { спасаться };