import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклеиваться: PerfectVerb = {
  name: Word('расклеиваться', 5),
  singular1stPerson: Word('расклеиваюсь', 5),
  singular2ndPerson: Word('расклеиваешься', 5),
  singular3rdPerson: Word('расклеивается', 5),
  plural1stPerson: Word('расклеиваемся', 5),
  plural2ndPerson: Word('расклеиваетесь', 5),
  plural3rdPerson: Word('расклеиваются', 5),
  masculinePast: Word('расклеивался', 5),
  femininePast: Word('расклеивалась', 5),
  neuterPast: Word('расклеивалось', 5),
  pluralPast: Word('расклеивались', 5),
  imperativeInformal: Word('расклеивайся', 5),
  imperativeFormal: Word('расклеивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расклеиваться.name.text, расклеиваться);

export { расклеиваться };