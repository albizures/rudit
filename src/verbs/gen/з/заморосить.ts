import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заморосить: PerfectVerb = {
  name: Word('заморосить', 7),
  singular1stPerson: Word('заморошу', 7),
  singular2ndPerson: Word('заморосишь', 7),
  singular3rdPerson: Word('заморосит', 7),
  plural1stPerson: Word('заморосим', 7),
  plural2ndPerson: Word('заморосите', 7),
  plural3rdPerson: Word('заморосят', 7),
  masculinePast: Word('заморосил', 7),
  femininePast: Word('заморосила', 7),
  neuterPast: Word('заморосило', 7),
  pluralPast: Word('заморосили', 7),
  imperativeInformal: Word('замороси', 7),
  imperativeFormal: Word('заморосите', 7),
  imperfect: [],
};

perfectVerbs.set(заморосить.name.text, заморосить);

export { заморосить };