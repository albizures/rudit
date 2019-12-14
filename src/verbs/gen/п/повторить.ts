import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повторить: PerfectVerb = {
  name: Word('повторить', 6),
  singular1stPerson: Word('повторю', 6),
  singular2ndPerson: Word('повторишь', 6),
  singular3rdPerson: Word('повторит', 6),
  plural1stPerson: Word('повторим', 6),
  plural2ndPerson: Word('повторите', 6),
  plural3rdPerson: Word('повторят', 6),
  masculinePast: Word('повторил', 6),
  femininePast: Word('повторила', 6),
  neuterPast: Word('повторило', 6),
  pluralPast: Word('повторили', 6),
  imperativeInformal: Word('повтори', 6),
  imperativeFormal: Word('повторите', 6),
  imperfect: ['повторять'],
};

perfectVerbs.set(повторить.name.text, повторить);

export { повторить };