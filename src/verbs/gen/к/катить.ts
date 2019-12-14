import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катить: PerfectVerb = {
  name: Word('катить', 3),
  singular1stPerson: Word('качу', 3),
  singular2ndPerson: Word('катишь', 1),
  singular3rdPerson: Word('катит', 1),
  plural1stPerson: Word('катим', 1),
  plural2ndPerson: Word('катите', 1),
  plural3rdPerson: Word('катят', 1),
  masculinePast: Word('катил', 3),
  femininePast: Word('катила', 3),
  neuterPast: Word('катило', 3),
  pluralPast: Word('катили', 3),
  imperativeInformal: Word('кати', 3),
  imperativeFormal: Word('катите', 3),
  imperfect: ['покатить'],
};

perfectVerbs.set(катить.name.text, катить);

export { катить };