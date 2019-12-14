import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрываться: PerfectVerb = {
  name: Word('прикрываться', 7),
  singular1stPerson: Word('прикрываюсь', 7),
  singular2ndPerson: Word('прикрываешься', 7),
  singular3rdPerson: Word('прикрывается', 7),
  plural1stPerson: Word('прикрываемся', 7),
  plural2ndPerson: Word('прикрываетесь', 7),
  plural3rdPerson: Word('прикрываются', 7),
  masculinePast: Word('прикрывался', 7),
  femininePast: Word('прикрывалась', 7),
  neuterPast: Word('прикрывалось', 7),
  pluralPast: Word('прикрывались', 7),
  imperativeInformal: Word('прикрывайся', 7),
  imperativeFormal: Word('прикрывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прикрываться.name.text, прикрываться);

export { прикрываться };