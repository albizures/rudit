import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгреметь: PerfectVerb = {
  name: Word('отгреметь', 6),
  singular1stPerson: Word('отгремлю', 7),
  singular2ndPerson: Word('отгремишь', 6),
  singular3rdPerson: Word('отгремит', 6),
  plural1stPerson: Word('отгремим', 6),
  plural2ndPerson: Word('отгремите', 6),
  plural3rdPerson: Word('отгремят', 6),
  masculinePast: Word('отгремел', 6),
  femininePast: Word('отгремела', 6),
  neuterPast: Word('отгремело', 6),
  pluralPast: Word('отгремели', 6),
  imperativeInformal: Word('отгреми', 6),
  imperativeFormal: Word('отгремите', 6),
  imperfect: [],
};

perfectVerbs.set(отгреметь.name.text, отгреметь);

export { отгреметь };