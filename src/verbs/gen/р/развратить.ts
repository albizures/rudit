import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развратить: PerfectVerb = {
  name: Word('развратить', 7),
  singular1stPerson: Word('развращу', 7),
  singular2ndPerson: Word('развратишь', 7),
  singular3rdPerson: Word('развратит', 7),
  plural1stPerson: Word('развратим', 7),
  plural2ndPerson: Word('развратите', 7),
  plural3rdPerson: Word('развратят', 7),
  masculinePast: Word('развратил', 7),
  femininePast: Word('развратила', 7),
  neuterPast: Word('развратило', 7),
  pluralPast: Word('развратили', 7),
  imperativeInformal: Word('разврати', 7),
  imperativeFormal: Word('развратите', 7),
  imperfect: [],
};

perfectVerbs.set(развратить.name.text, развратить);

export { развратить };