import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уберечься: PerfectVerb = {
  name: Word('уберечься', 4),
  singular1stPerson: Word('уберегусь', 6),
  singular2ndPerson: Word('убережёшься', 6),
  singular3rdPerson: Word('убережётся', 6),
  plural1stPerson: Word('убережёмся', 6),
  plural2ndPerson: Word('убережётесь', 6),
  plural3rdPerson: Word('уберегутся', 6),
  masculinePast: Word('уберёгся', 4),
  femininePast: Word('убереглась', 7),
  neuterPast: Word('убереглось', 7),
  pluralPast: Word('убереглись', 7),
  imperativeInformal: Word('уберегись', 6),
  imperativeFormal: Word('уберегитесь', 6),
  imperfect: [],
};

perfectVerbs.set(уберечься.name.text, уберечься);

export { уберечься };