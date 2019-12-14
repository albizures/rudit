import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сменить: PerfectVerb = {
  name: Word('сменить', 4),
  singular1stPerson: Word('сменю', 4),
  singular2ndPerson: Word('сменишь', 2),
  singular3rdPerson: Word('сменит', 2),
  plural1stPerson: Word('сменим', 2),
  plural2ndPerson: Word('смените', 2),
  plural3rdPerson: Word('сменят', 2),
  masculinePast: Word('сменил', 4),
  femininePast: Word('сменила', 4),
  neuterPast: Word('сменило', 4),
  pluralPast: Word('сменили', 4),
  imperativeInformal: Word('смени', 4),
  imperativeFormal: Word('смените', 4),
  imperfect: ['сменять'],
};

perfectVerbs.set(сменить.name.text, сменить);

export { сменить };