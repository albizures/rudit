import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстраиваться: PerfectVerb = {
  name: Word('расстраиваться', 6),
  singular1stPerson: Word('расстраиваюсь', 6),
  singular2ndPerson: Word('расстраиваешься', 6),
  singular3rdPerson: Word('расстраивается', 6),
  plural1stPerson: Word('расстраиваемся', 6),
  plural2ndPerson: Word('расстраиваетесь', 6),
  plural3rdPerson: Word('расстраиваются', 6),
  masculinePast: Word('расстраивался', 6),
  femininePast: Word('расстраивалась', 6),
  neuterPast: Word('расстраивалось', 6),
  pluralPast: Word('расстраивались', 6),
  imperativeInformal: Word('расстраивайся', 6),
  imperativeFormal: Word('расстраивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расстраиваться.name.text, расстраиваться);

export { расстраиваться };