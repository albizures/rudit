import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уберечься: PerfectVerb = {
  name: Word('уберечься', 4),
  singular1stPerson: Word('уберегусь', 6),
  singular2ndPerson: Word('убережёшься', 2),
  singular3rdPerson: Word('убережётся', 2),
  plural1stPerson: Word('убережёмся', 2),
  plural2ndPerson: Word('убережётесь', 2),
  plural3rdPerson: Word('уберегутся', 6),
  masculinePast: Word('уберёгся', 2),
  femininePast: Word('убереглась', 7),
  neuterPast: Word('убереглось', 7),
  pluralPast: Word('убереглись', 7),
  imperativeInformal: Word('уберегись', 6),
  imperativeFormal: Word('уберегитесь', 6),
  imperfect: [],
};

perfectVerbs.set(уберечься.name.text, уберечься);

export { уберечься };