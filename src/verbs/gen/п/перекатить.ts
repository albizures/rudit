import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекатить: PerfectVerb = {
  name: Word('перекатить', 7),
  singular1stPerson: Word('перекачу', 7),
  singular2ndPerson: Word('перекатишь', 5),
  singular3rdPerson: Word('перекатит', 5),
  plural1stPerson: Word('перекатим', 5),
  plural2ndPerson: Word('перекатите', 5),
  plural3rdPerson: Word('перекатят', 5),
  masculinePast: Word('перекатил', 7),
  femininePast: Word('перекатила', 7),
  neuterPast: Word('перекатило', 7),
  pluralPast: Word('перекатили', 7),
  imperativeInformal: Word('перекати', 7),
  imperativeFormal: Word('перекатите', 7),
  imperfect: [],
};

perfectVerbs.set(перекатить.name.text, перекатить);

export { перекатить };