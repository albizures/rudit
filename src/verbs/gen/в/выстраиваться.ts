import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстраиваться: PerfectVerb = {
  name: Word('выстраиваться', 5),
  singular1stPerson: Word('выстраиваюсь', 5),
  singular2ndPerson: Word('выстраиваешься', 5),
  singular3rdPerson: Word('выстраивается', 5),
  plural1stPerson: Word('выстраиваемся', 5),
  plural2ndPerson: Word('выстраиваетесь', 5),
  plural3rdPerson: Word('выстраиваются', 5),
  masculinePast: Word('выстраивался', 5),
  femininePast: Word('выстраивалась', 5),
  neuterPast: Word('выстраивалось', 5),
  pluralPast: Word('выстраивались', 5),
  imperativeInformal: Word('выстраивайся', 5),
  imperativeFormal: Word('выстраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выстраиваться.name.text, выстраиваться);

export { выстраиваться };