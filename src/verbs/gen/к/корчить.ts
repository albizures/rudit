import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корчить: PerfectVerb = {
  name: Word('корчить', 1),
  singular1stPerson: Word('корчу', 1),
  singular2ndPerson: Word('корчишь', 1),
  singular3rdPerson: Word('корчит', 1),
  plural1stPerson: Word('корчим', 1),
  plural2ndPerson: Word('корчите', 1),
  plural3rdPerson: Word('корчат', 1),
  masculinePast: Word('корчил', 1),
  femininePast: Word('корчила', 1),
  neuterPast: Word('корчило', 1),
  pluralPast: Word('корчили', 1),
  imperativeInformal: Word('корчи//ко'рчь', 1),
  imperativeFormal: Word('корчите//ко'рчьте', 1),
  imperfect: [],
};

perfectVerbs.set(корчить.name.text, корчить);

export { корчить };