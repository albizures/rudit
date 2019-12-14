import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заездить: PerfectVerb = {
  name: Word('заездить', 2),
  singular1stPerson: Word('заезжу', 2),
  singular2ndPerson: Word('заездишь', 2),
  singular3rdPerson: Word('заездит', 2),
  plural1stPerson: Word('заездим', 2),
  plural2ndPerson: Word('заездите', 2),
  plural3rdPerson: Word('заездят', 2),
  masculinePast: Word('заездил', 2),
  femininePast: Word('заездила', 2),
  neuterPast: Word('заездило', 2),
  pluralPast: Word('заездили', 2),
  imperativeInformal: Word('заезди', 2),
  imperativeFormal: Word('заездите', 2),
  imperfect: [],
};

perfectVerbs.set(заездить.name.text, заездить);

export { заездить };