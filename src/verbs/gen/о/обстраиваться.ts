import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстраиваться: PerfectVerb = {
  name: Word('обстраиваться', 5),
  singular1stPerson: Word('обстраиваюсь', 5),
  singular2ndPerson: Word('обстраиваешься', 5),
  singular3rdPerson: Word('обстраивается', 5),
  plural1stPerson: Word('обстраиваемся', 5),
  plural2ndPerson: Word('обстраиваетесь', 5),
  plural3rdPerson: Word('обстраиваются', 5),
  masculinePast: Word('обстраивался', 5),
  femininePast: Word('обстраивалась', 5),
  neuterPast: Word('обстраивалось', 5),
  pluralPast: Word('обстраивались', 5),
  imperativeInformal: Word('обстраивайся', 5),
  imperativeFormal: Word('обстраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обстраиваться.name.text, обстраиваться);

export { обстраиваться };