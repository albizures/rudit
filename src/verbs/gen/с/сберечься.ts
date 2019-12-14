import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сберечься: PerfectVerb = {
  name: Word('сберечься', 4),
  singular1stPerson: Word('сберегусь', 6),
  singular2ndPerson: Word('сбережёшься', 6),
  singular3rdPerson: Word('сбережётся', 6),
  plural1stPerson: Word('сбережёмся', 6),
  plural2ndPerson: Word('сбережётесь', 6),
  plural3rdPerson: Word('сберегутся', 6),
  masculinePast: Word('сберёгся', 4),
  femininePast: Word('сбереглась', 7),
  neuterPast: Word('сбереглось', 7),
  pluralPast: Word('сбереглись', 7),
  imperativeInformal: Word('сберегись', 6),
  imperativeFormal: Word('сберегитесь', 6),
  imperfect: [],
};

perfectVerbs.set(сберечься.name.text, сберечься);

export { сберечься };