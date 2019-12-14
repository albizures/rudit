import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недопить: PerfectVerb = {
  name: Word('недопить', 5),
  singular1stPerson: Word('недопью', 6),
  singular2ndPerson: Word('недопьёшь', 6),
  singular3rdPerson: Word('недопьёт', 6),
  plural1stPerson: Word('недопьём', 6),
  plural2ndPerson: Word('недопьёте', 6),
  plural3rdPerson: Word('недопьют', 6),
  masculinePast: Word('недопил//недо'пил', 5),
  femininePast: Word('недопила', 7),
  neuterPast: Word('недопило//недо'пило', 5),
  pluralPast: Word('недопили//недо'пили', 5),
  imperativeInformal: Word('недопей', 5),
  imperativeFormal: Word('недопейте', 5),
  imperfect: [],
};

perfectVerbs.set(недопить.name.text, недопить);

export { недопить };