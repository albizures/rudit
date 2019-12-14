import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешибить: PerfectVerb = {
  name: Word('перешибить', 7),
  singular1stPerson: Word('перешибу', 7),
  singular2ndPerson: Word('перешибёшь', 1),
  singular3rdPerson: Word('перешибёт', 1),
  plural1stPerson: Word('перешибём', 1),
  plural2ndPerson: Word('перешибёте', 1),
  plural3rdPerson: Word('перешибут', 7),
  masculinePast: Word('перешиб', 5),
  femininePast: Word('перешибла', 5),
  neuterPast: Word('перешибло', 5),
  pluralPast: Word('перешибли', 5),
  imperativeInformal: Word('перешиби', 7),
  imperativeFormal: Word('перешибите', 7),
  imperfect: [],
};

perfectVerbs.set(перешибить.name.text, перешибить);

export { перешибить };