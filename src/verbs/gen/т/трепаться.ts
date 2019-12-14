import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трепаться: PerfectVerb = {
  name: Word('трепаться', 4),
  singular1stPerson: Word('треплюсь', 5),
  singular2ndPerson: Word('треплешься', 2),
  singular3rdPerson: Word('треплется', 2),
  plural1stPerson: Word('треплемся', 2),
  plural2ndPerson: Word('треплетесь', 2),
  plural3rdPerson: Word('треплются', 2),
  masculinePast: Word('трепался', 4),
  femininePast: Word('трепалась', 4),
  neuterPast: Word('трепалось', 4),
  pluralPast: Word('трепались', 4),
  imperativeInformal: Word('треплись', 5),
  imperativeFormal: Word('треплитесь', 5),
  imperfect: [],
};

perfectVerbs.set(трепаться.name.text, трепаться);

export { трепаться };