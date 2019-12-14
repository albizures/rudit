import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шить: PerfectVerb = {
  name: Word('шить', 1),
  singular1stPerson: Word('шью', 2),
  singular2ndPerson: Word('шьёшь', 2),
  singular3rdPerson: Word('шьёт', 2),
  plural1stPerson: Word('шьём', 2),
  plural2ndPerson: Word('шьёте', 2),
  plural3rdPerson: Word('шьют', 2),
  masculinePast: Word('шил', 1),
  femininePast: Word('шила', 1),
  neuterPast: Word('шило', 1),
  pluralPast: Word('шили', 1),
  imperativeInformal: Word('шей', 1),
  imperativeFormal: Word('шейте', 1),
  imperfect: ['сшить'],
};

perfectVerbs.set(шить.name.text, шить);

export { шить };