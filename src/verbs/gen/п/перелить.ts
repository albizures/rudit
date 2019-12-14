import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелить: PerfectVerb = {
  name: Word('перелить', 5),
  singular1stPerson: Word('перелью', 6),
  singular2ndPerson: Word('перельёшь', 1),
  singular3rdPerson: Word('перельёт', 1),
  plural1stPerson: Word('перельём', 1),
  plural2ndPerson: Word('перельёте', 1),
  plural3rdPerson: Word('перельют', 6),
  masculinePast: Word('перелил', 5),
  femininePast: Word('перелила', 7),
  neuterPast: Word('перелило', 5),
  pluralPast: Word('перелили', 5),
  imperativeInformal: Word('перелей', 5),
  imperativeFormal: Word('перелейте', 5),
  imperfect: [],
};

perfectVerbs.set(перелить.name.text, перелить);

export { перелить };