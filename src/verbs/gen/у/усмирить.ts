import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усмирить: PerfectVerb = {
  name: Word('усмирить', 5),
  singular1stPerson: Word('усмирю', 5),
  singular2ndPerson: Word('усмиришь', 5),
  singular3rdPerson: Word('усмирит', 5),
  plural1stPerson: Word('усмирим', 5),
  plural2ndPerson: Word('усмирите', 5),
  plural3rdPerson: Word('усмирят', 5),
  masculinePast: Word('усмирил', 5),
  femininePast: Word('усмирила', 5),
  neuterPast: Word('усмирило', 5),
  pluralPast: Word('усмирили', 5),
  imperativeInformal: Word('усмири', 5),
  imperativeFormal: Word('усмирите', 5),
  imperfect: [],
};

perfectVerbs.set(усмирить.name.text, усмирить);

export { усмирить };