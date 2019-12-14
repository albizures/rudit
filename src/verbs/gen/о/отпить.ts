import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпить: PerfectVerb = {
  name: Word('отпить', 3),
  singular1stPerson: Word('отопью', 5),
  singular2ndPerson: Word('отопьёшь', 0),
  singular3rdPerson: Word('отопьёт', 0),
  plural1stPerson: Word('отопьём', 0),
  plural2ndPerson: Word('отопьёте', 7),
  plural3rdPerson: Word('отопьют', 5),
  masculinePast: Word('отпил//о'тпил', 3),
  femininePast: Word('отпила', 5),
  neuterPast: Word('отпило//о'тпило', 3),
  pluralPast: Word('отпили//о'тпили', 3),
  imperativeInformal: Word('отпей', 3),
  imperativeFormal: Word('отпейте', 3),
  imperfect: [],
};

perfectVerbs.set(отпить.name.text, отпить);

export { отпить };