import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морить: PerfectVerb = {
  name: Word('морить', 3),
  singular1stPerson: Word('морю', 3),
  singular2ndPerson: Word('моришь', 3),
  singular3rdPerson: Word('морит', 3),
  plural1stPerson: Word('морим', 3),
  plural2ndPerson: Word('морите', 3),
  plural3rdPerson: Word('морят', 3),
  masculinePast: Word('морил', 3),
  femininePast: Word('морила', 3),
  neuterPast: Word('морило', 3),
  pluralPast: Word('морили', 3),
  imperativeInformal: Word('мори', 3),
  imperativeFormal: Word('морите', 3),
  imperfect: [],
};

perfectVerbs.set(морить.name.text, морить);

export { морить };