import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утраиваться: PerfectVerb = {
  name: Word('утраиваться', 3),
  singular1stPerson: Word('утраиваюсь', 3),
  singular2ndPerson: Word('утраиваешься', 3),
  singular3rdPerson: Word('утраивается', 3),
  plural1stPerson: Word('утраиваемся', 3),
  plural2ndPerson: Word('утраиваетесь', 3),
  plural3rdPerson: Word('утраиваются', 3),
  masculinePast: Word('утраивался', 3),
  femininePast: Word('утраивалась', 3),
  neuterPast: Word('утраивалось', 3),
  pluralPast: Word('утраивались', 3),
  imperativeInformal: Word('утраивайся', 3),
  imperativeFormal: Word('утраивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(утраиваться.name.text, утраиваться);

export { утраиваться };