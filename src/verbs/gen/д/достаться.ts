import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достаться: PerfectVerb = {
  name: Word('достаться', 4),
  singular1stPerson: Word('достанусь', 4),
  singular2ndPerson: Word('достанешься', 4),
  singular3rdPerson: Word('достанется', 4),
  plural1stPerson: Word('достанемся', 4),
  plural2ndPerson: Word('достанетесь', 4),
  plural3rdPerson: Word('достанутся', 4),
  masculinePast: Word('достался', 4),
  femininePast: Word('досталась', 4),
  neuterPast: Word('досталось', 4),
  pluralPast: Word('достались', 4),
  imperativeInformal: Word('достанься', 4),
  imperativeFormal: Word('достаньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(достаться.name.text, достаться);

export { достаться };