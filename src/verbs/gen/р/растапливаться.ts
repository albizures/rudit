import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растапливаться: PerfectVerb = {
  name: Word('растапливаться', 4),
  singular1stPerson: Word('растапливаюсь', 4),
  singular2ndPerson: Word('растапливаешься', 4),
  singular3rdPerson: Word('растапливается', 4),
  plural1stPerson: Word('растапливаемся', 4),
  plural2ndPerson: Word('растапливаетесь', 4),
  plural3rdPerson: Word('растапливаются', 4),
  masculinePast: Word('растапливался', 4),
  femininePast: Word('растапливалась', 4),
  neuterPast: Word('растапливалось', 4),
  pluralPast: Word('растапливались', 4),
  imperativeInformal: Word('растапливайся', 4),
  imperativeFormal: Word('растапливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(растапливаться.name.text, растапливаться);

export { растапливаться };