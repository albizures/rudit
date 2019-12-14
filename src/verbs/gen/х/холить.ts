import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const холить: PerfectVerb = {
  name: Word('холить', 1),
  singular1stPerson: Word('холю', 1),
  singular2ndPerson: Word('холишь', 1),
  singular3rdPerson: Word('холит', 1),
  plural1stPerson: Word('холим', 1),
  plural2ndPerson: Word('холите', 1),
  plural3rdPerson: Word('холят', 1),
  masculinePast: Word('холил', 1),
  femininePast: Word('холила', 1),
  neuterPast: Word('холило', 1),
  pluralPast: Word('холили', 1),
  imperativeInformal: Word('холь', 1),
  imperativeFormal: Word('хольте', 1),
  imperfect: [],
};

perfectVerbs.set(холить.name.text, холить);

export { холить };