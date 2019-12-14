import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высыпаться: PerfectVerb = {
  name: Word('высыпаться', 5),
  singular1stPerson: Word('высыпаюсь', 5),
  singular2ndPerson: Word('высыпаешься', 5),
  singular3rdPerson: Word('высыпается', 5),
  plural1stPerson: Word('высыпаемся', 5),
  plural2ndPerson: Word('высыпаетесь', 5),
  plural3rdPerson: Word('высыпаются', 5),
  masculinePast: Word('высыпался', 5),
  femininePast: Word('высыпалась', 5),
  neuterPast: Word('высыпалось', 5),
  pluralPast: Word('высыпались', 5),
  imperativeInformal: Word('высыпайся', 5),
  imperativeFormal: Word('высыпайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(высыпаться.name.text, высыпаться);

export { высыпаться };