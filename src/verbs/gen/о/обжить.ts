import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжить: PerfectVerb = {
  name: Word('обжить', 3),
  singular1stPerson: Word('обживу', 5),
  singular2ndPerson: Word('обживёшь', 5),
  singular3rdPerson: Word('обживёт', 5),
  plural1stPerson: Word('обживём', 5),
  plural2ndPerson: Word('обживёте', 5),
  plural3rdPerson: Word('обживут', 5),
  masculinePast: Word('обжил//о'бжил', 3),
  femininePast: Word('обжила', 5),
  neuterPast: Word('обжило//о'бжило', 3),
  pluralPast: Word('обжили//о'бжили', 3),
  imperativeInformal: Word('обживи', 5),
  imperativeFormal: Word('обживите', 5),
  imperfect: [],
};

perfectVerbs.set(обжить.name.text, обжить);

export { обжить };