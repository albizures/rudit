import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевить: PerfectVerb = {
  name: Word('перевить', 5),
  singular1stPerson: Word('перевью', 6),
  singular2ndPerson: Word('перевьёшь', 1),
  singular3rdPerson: Word('перевьёт', 1),
  plural1stPerson: Word('перевьём', 1),
  plural2ndPerson: Word('перевьёте', 1),
  plural3rdPerson: Word('перевьют', 6),
  masculinePast: Word('перевил', 5),
  femininePast: Word('перевила', 7),
  neuterPast: Word('перевило', 5),
  pluralPast: Word('перевили', 5),
  imperativeInformal: Word('перевей', 5),
  imperativeFormal: Word('перевейте', 5),
  imperfect: [],
};

perfectVerbs.set(перевить.name.text, перевить);

export { перевить };