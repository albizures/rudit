import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унижаться: PerfectVerb = {
  name: Word('унижаться', 4),
  singular1stPerson: Word('унижаюсь', 4),
  singular2ndPerson: Word('унижаешься', 4),
  singular3rdPerson: Word('унижается', 4),
  plural1stPerson: Word('унижаемся', 4),
  plural2ndPerson: Word('унижаетесь', 4),
  plural3rdPerson: Word('унижаются', 4),
  masculinePast: Word('унижался', 4),
  femininePast: Word('унижалась', 4),
  neuterPast: Word('унижалось', 4),
  pluralPast: Word('унижались', 4),
  imperativeInformal: Word('унижайся', 4),
  imperativeFormal: Word('унижайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(унижаться.name.text, унижаться);

export { унижаться };