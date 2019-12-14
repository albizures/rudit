import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрачиваться: PerfectVerb = {
  name: Word('утрачиваться', 3),
  singular1stPerson: Word('утрачиваюсь', 3),
  singular2ndPerson: Word('утрачиваешься', 3),
  singular3rdPerson: Word('утрачивается', 3),
  plural1stPerson: Word('утрачиваемся', 3),
  plural2ndPerson: Word('утрачиваетесь', 3),
  plural3rdPerson: Word('утрачиваются', 3),
  masculinePast: Word('утрачивался', 3),
  femininePast: Word('утрачивалась', 3),
  neuterPast: Word('утрачивалось', 3),
  pluralPast: Word('утрачивались', 3),
  imperativeInformal: Word('утрачивайся', 3),
  imperativeFormal: Word('утрачивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(утрачиваться.name.text, утрачиваться);

export { утрачиваться };