import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начаться: PerfectVerb = {
  name: Word('начаться', 3),
  singular1stPerson: Word('начнусь', 4),
  singular2ndPerson: Word('начнёшься', 1),
  singular3rdPerson: Word('начнётся', 1),
  plural1stPerson: Word('начнёмся', 1),
  plural2ndPerson: Word('начнётесь', 1),
  plural3rdPerson: Word('начнутся', 4),
  masculinePast: Word('начался,начался',нача'лся', 1),
  femininePast: Word('началась', 5),
  neuterPast: Word('началось,на'чалось', 5),
  pluralPast: Word('начались,на'чались', 5),
  imperativeInformal: Word('начнись', 4),
  imperativeFormal: Word('начнитесь', 4),
  imperfect: ['начинаться'],
};

perfectVerbs.set(начаться.name.text, начаться);

export { начаться };