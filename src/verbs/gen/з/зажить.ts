import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажить: PerfectVerb = {
  name: Word('зажить', 3),
  singular1stPerson: Word('заживу', 5),
  singular2ndPerson: Word('заживёшь', 1),
  singular3rdPerson: Word('заживёт', 1),
  plural1stPerson: Word('заживём', 1),
  plural2ndPerson: Word('заживёте', 1),
  plural3rdPerson: Word('заживут', 5),
  masculinePast: Word('зажил,за'жил', 3),
  femininePast: Word('зажила', 5),
  neuterPast: Word('зажило,за'жило', 3),
  pluralPast: Word('зажили,за'жили', 3),
  imperativeInformal: Word('заживи', 5),
  imperativeFormal: Word('заживите', 5),
  imperfect: ['заживать'],
};

perfectVerbs.set(зажить.name.text, зажить);

export { зажить };