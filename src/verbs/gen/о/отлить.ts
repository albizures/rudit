import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлить: PerfectVerb = {
  name: Word('отлить', 3),
  singular1stPerson: Word('отолью', 5),
  singular2ndPerson: Word('отольёшь', 0),
  singular3rdPerson: Word('отольёт', 0),
  plural1stPerson: Word('отольём', 0),
  plural2ndPerson: Word('отольёте', 7),
  plural3rdPerson: Word('отольют', 5),
  masculinePast: Word('отлил//о'тлил', 3),
  femininePast: Word('отлила', 5),
  neuterPast: Word('отлило//о'тлило', 3),
  pluralPast: Word('отлили//о'тлили', 3),
  imperativeInformal: Word('отлей', 3),
  imperativeFormal: Word('отлейте', 3),
  imperfect: [],
};

perfectVerbs.set(отлить.name.text, отлить);

export { отлить };