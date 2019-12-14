import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заголосить: PerfectVerb = {
  name: Word('заголосить', 7),
  singular1stPerson: Word('заголошу', 7),
  singular2ndPerson: Word('заголосишь', 7),
  singular3rdPerson: Word('заголосит', 7),
  plural1stPerson: Word('заголосим', 7),
  plural2ndPerson: Word('заголосите', 7),
  plural3rdPerson: Word('заголосят', 7),
  masculinePast: Word('заголосил', 7),
  femininePast: Word('заголосила', 7),
  neuterPast: Word('заголосило', 7),
  pluralPast: Word('заголосили', 7),
  imperativeInformal: Word('заголоси', 7),
  imperativeFormal: Word('заголосите', 7),
  imperfect: [],
};

perfectVerbs.set(заголосить.name.text, заголосить);

export { заголосить };