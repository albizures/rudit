import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешить: PerfectVerb = {
  name: Word('перешить', 5),
  singular1stPerson: Word('перешью', 6),
  singular2ndPerson: Word('перешьёшь', 1),
  singular3rdPerson: Word('перешьёт', 1),
  plural1stPerson: Word('перешьём', 1),
  plural2ndPerson: Word('перешьёте', 1),
  plural3rdPerson: Word('перешьют', 6),
  masculinePast: Word('перешил', 5),
  femininePast: Word('перешила', 5),
  neuterPast: Word('перешило', 5),
  pluralPast: Word('перешили', 5),
  imperativeInformal: Word('перешей', 5),
  imperativeFormal: Word('перешейте', 5),
  imperfect: [],
};

perfectVerbs.set(перешить.name.text, перешить);

export { перешить };