import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увить: PerfectVerb = {
  name: Word('увить', 2),
  singular1stPerson: Word('увью', 3),
  singular2ndPerson: Word('увьёшь', 0),
  singular3rdPerson: Word('увьёт', 0),
  plural1stPerson: Word('увьём', 0),
  plural2ndPerson: Word('увьёте', 5),
  plural3rdPerson: Word('увьют', 3),
  masculinePast: Word('увил', 2),
  femininePast: Word('увила', 4),
  neuterPast: Word('увило', 2),
  pluralPast: Word('увили', 2),
  imperativeInformal: Word('увей', 2),
  imperativeFormal: Word('увейте', 2),
  imperfect: [],
};

perfectVerbs.set(увить.name.text, увить);

export { увить };