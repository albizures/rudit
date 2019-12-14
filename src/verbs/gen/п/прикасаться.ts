import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикасаться: PerfectVerb = {
  name: Word('прикасаться', 6),
  singular1stPerson: Word('прикасаюсь', 6),
  singular2ndPerson: Word('прикасаешься', 6),
  singular3rdPerson: Word('прикасается', 6),
  plural1stPerson: Word('прикасаемся', 6),
  plural2ndPerson: Word('прикасаетесь', 6),
  plural3rdPerson: Word('прикасаются', 6),
  masculinePast: Word('прикасался', 6),
  femininePast: Word('прикасалась', 6),
  neuterPast: Word('прикасалось', 6),
  pluralPast: Word('прикасались', 6),
  imperativeInformal: Word('прикасайся', 6),
  imperativeFormal: Word('прикасайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прикасаться.name.text, прикасаться);

export { прикасаться };