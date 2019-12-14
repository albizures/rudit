import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колебаться: PerfectVerb = {
  name: Word('колебаться', 5),
  singular1stPerson: Word('колеблюсь', 3),
  singular2ndPerson: Word('колеблешься', 3),
  singular3rdPerson: Word('колеблется', 3),
  plural1stPerson: Word('колеблемся', 3),
  plural2ndPerson: Word('колеблетесь', 3),
  plural3rdPerson: Word('колеблются', 3),
  masculinePast: Word('колебался', 3),
  femininePast: Word('колебалась', 3),
  neuterPast: Word('колебалось', 3),
  pluralPast: Word('колебались', 3),
  imperativeInformal: Word('колеблись', 3),
  imperativeFormal: Word('колеблитесь', 3),
  imperfect: ['поколебаться'],
};

perfectVerbs.set(колебаться.name.text, колебаться);

export { колебаться };