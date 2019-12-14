import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повременить: PerfectVerb = {
  name: Word('повременить', 8),
  singular1stPerson: Word('повременю', 8),
  singular2ndPerson: Word('повременишь', 8),
  singular3rdPerson: Word('повременит', 8),
  plural1stPerson: Word('повременим', 8),
  plural2ndPerson: Word('повремените', 8),
  plural3rdPerson: Word('повременят', 8),
  masculinePast: Word('повременил', 8),
  femininePast: Word('повременила', 8),
  neuterPast: Word('повременило', 8),
  pluralPast: Word('повременили', 8),
  imperativeInformal: Word('повремени', 8),
  imperativeFormal: Word('повремените', 8),
  imperfect: [],
};

perfectVerbs.set(повременить.name.text, повременить);

export { повременить };