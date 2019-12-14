import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драить: PerfectVerb = {
  name: Word('драить', 2),
  singular1stPerson: Word('драю', 2),
  singular2ndPerson: Word('драишь', 2),
  singular3rdPerson: Word('драит', 2),
  plural1stPerson: Word('драим', 2),
  plural2ndPerson: Word('драите', 2),
  plural3rdPerson: Word('драят', 2),
  masculinePast: Word('драил', 2),
  femininePast: Word('драила', 2),
  neuterPast: Word('драило', 2),
  pluralPast: Word('драили', 2),
  imperativeInformal: Word('драй', 2),
  imperativeFormal: Word('драйте', 2),
  imperfect: [],
};

perfectVerbs.set(драить.name.text, драить);

export { драить };