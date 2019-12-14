import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облить: PerfectVerb = {
  name: Word('облить', 3),
  singular1stPerson: Word('оболью', 5),
  singular2ndPerson: Word('обольёшь', 0),
  singular3rdPerson: Word('обольёт', 0),
  plural1stPerson: Word('обольём', 0),
  plural2ndPerson: Word('обольёте', 7),
  plural3rdPerson: Word('обольют', 5),
  masculinePast: Word('облил//о'блил', 3),
  femininePast: Word('облила', 5),
  neuterPast: Word('облило//о'блило', 3),
  pluralPast: Word('облили//о'блили', 3),
  imperativeInformal: Word('облей', 3),
  imperativeFormal: Word('облейте', 3),
  imperfect: [],
};

perfectVerbs.set(облить.name.text, облить);

export { облить };