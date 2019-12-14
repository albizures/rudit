import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстраиваться: PerfectVerb = {
  name: Word('отстраиваться', 5),
  singular1stPerson: Word('отстраиваюсь', 5),
  singular2ndPerson: Word('отстраиваешься', 5),
  singular3rdPerson: Word('отстраивается', 5),
  plural1stPerson: Word('отстраиваемся', 5),
  plural2ndPerson: Word('отстраиваетесь', 5),
  plural3rdPerson: Word('отстраиваются', 5),
  masculinePast: Word('отстраивался', 5),
  femininePast: Word('отстраивалась', 5),
  neuterPast: Word('отстраивалось', 5),
  pluralPast: Word('отстраивались', 5),
  imperativeInformal: Word('отстраивайся', 5),
  imperativeFormal: Word('отстраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отстраиваться.name.text, отстраиваться);

export { отстраиваться };