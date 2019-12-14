import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклеиваться: PerfectVerb = {
  name: Word('наклеиваться', 4),
  singular1stPerson: Word('наклеиваюсь', 4),
  singular2ndPerson: Word('наклеиваешься', 4),
  singular3rdPerson: Word('наклеивается', 4),
  plural1stPerson: Word('наклеиваемся', 4),
  plural2ndPerson: Word('наклеиваетесь', 4),
  plural3rdPerson: Word('наклеиваются', 4),
  masculinePast: Word('наклеивался', 4),
  femininePast: Word('наклеивалась', 4),
  neuterPast: Word('наклеивалось', 4),
  pluralPast: Word('наклеивались', 4),
  imperativeInformal: Word('наклеивайся', 4),
  imperativeFormal: Word('наклеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наклеиваться.name.text, наклеиваться);

export { наклеиваться };