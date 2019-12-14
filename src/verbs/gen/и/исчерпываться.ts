import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчерпываться: PerfectVerb = {
  name: Word('исчерпываться', 3),
  singular1stPerson: Word('исчерпываюсь', 3),
  singular2ndPerson: Word('исчерпываешься', 3),
  singular3rdPerson: Word('исчерпывается', 3),
  plural1stPerson: Word('исчерпываемся', 3),
  plural2ndPerson: Word('исчерпываетесь', 3),
  plural3rdPerson: Word('исчерпываются', 3),
  masculinePast: Word('исчерпывался', 3),
  femininePast: Word('исчерпывалась', 3),
  neuterPast: Word('исчерпывалось', 3),
  pluralPast: Word('исчерпывались', 3),
  imperativeInformal: Word('исчерпывайся', 3),
  imperativeFormal: Word('исчерпывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(исчерпываться.name.text, исчерпываться);

export { исчерпываться };