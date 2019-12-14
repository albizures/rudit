import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассыпаться: PerfectVerb = {
  name: Word('рассыпаться', 6),
  singular1stPerson: Word('рассыпаюсь', 6),
  singular2ndPerson: Word('рассыпаешься', 6),
  singular3rdPerson: Word('рассыпается', 6),
  plural1stPerson: Word('рассыпаемся', 6),
  plural2ndPerson: Word('рассыпаетесь', 6),
  plural3rdPerson: Word('рассыпаются', 6),
  masculinePast: Word('рассыпался', 6),
  femininePast: Word('рассыпалась', 6),
  neuterPast: Word('рассыпалось', 6),
  pluralPast: Word('рассыпались', 6),
  imperativeInformal: Word('рассыпайся', 6),
  imperativeFormal: Word('рассыпайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(рассыпаться.name.text, рассыпаться);

export { рассыпаться };